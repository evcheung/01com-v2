import styled from "styled-components"
import { Box, Text, TextVariants, TextColors, PrimaryButton, SecondaryButton, ButtonTextColors, ButtonSizes } from "../../components/core"
import Head from "next/head"
import IITLayout from "../../components/im-in-touch/IITLayout"
import Heading, { HeadingVariants } from "../../components/core/heading"
import { theme } from "../../theme"
import { Anchor } from "../../components/core/anchor"
import Link from "next/link"
import { IITPageBanner } from "../../components/im-in-touch/IITPageBanner"
import { PageContentContainer } from "../../components/PageContentContainer"
import { ReactNode, useRef } from 'react';
import { breakpoints } from "../../utils/breakpoints"

const StyledContactContainer = styled(Box)`
  background-color: ${theme.colors.neutral.xs};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  width: 100%;

${breakpoints("flex-direction", "", [
  { 900: 'column' },
])}
${breakpoints("align-items", "", [
  { 900: 'flex-start' },
])}
`

const ContactContainer = ({ children }: { children: ReactNode }) => {
  return (
    <StyledContactContainer>
      {children}
    </StyledContactContainer>
  )
}
const ContactSubText = styled(Text)`
font-size: 12px;
font-weight: ${theme.fontWeight[300]};
text-align: left;
line-height:24px;
width:100%;
`

const Border = styled(Box)`
border-left: 1px dotted ${theme.colors.neutral.md};
height: 46px;

${breakpoints("border-left", "", [
  { 900: 'none' },
])}
${breakpoints("border-bottom", "", [
  { 900: `1px dotted ${theme.colors.neutral.md}` },
])}
${breakpoints("width", "", [
  { 900: `100%` },
])}
${breakpoints("height", "", [
  { 900: `auto` },
])}
${breakpoints("margin", "", [
  { 900: `16px 0` },
])}
`
const StyledHeading = styled(Heading)`
margin: 0 0 16px 0;
}
`
const StyledLineItem = styled.li`
  background: url(${bullet.src}) no-repeat 0 4px;
  padding-left: 32px;
  margin-bottom: 16px;
`

const StyledList = styled.ul`
padding: 0;
list-style: none;
`

export default function Pricing() {
	var priceArr  = new Array();
	var prom0 = '';
	var arr = new Array();
	arr['qty_min'] = 1;
	arr['qty_max'] = 1;
	arr['yearlyamount']  = "99.95";
	arr['monthlyamount'] = "9.95";
	priceArr[0] = arr;
	var arr = new Array();
	arr['qty_min'] = 2;
	arr['qty_max'] = 5;
	arr['yearlyamount']  = "95.00";
	arr['monthlyamount'] = "9.50";
	priceArr[1] = arr;
	var arr = new Array();
	arr['qty_min'] = 6;
	arr['qty_max'] = 10;
	arr['yearlyamount']  = "90.00";
	arr['monthlyamount'] = "9.00";
	priceArr[2] = arr;

    const formRef = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        // Accessing form reference and submitting the form
        formRef.current.submit();
    };

	function onQtyChange()
	{
		var qobj, bInval;
		if(formRef.current.promcode.value!=prom0)
		{
			formRef.current.submit();
			return;
		}

		qobj = formRef.current.qty;
		if (isNaN(qobj.value) || qobj.value < 0 || qobj.value.indexOf(".") != -1)
		{
			alert("The license number you input is invalid.");
			qobj.value = 1;
			qobj.select();
			qobj.focus();
		}
		else
			WriteTotalCost();
	}

	function onPlanChange()
	{
		onCalculate();	
	}
	
	function formatCurrency(num)
	{
		var retVal, cents, sign;
		var sp = true;
		
		 num = num.toString().replace(/\$|\,/g,'');
		 if(isNaN(num))
			 num = "0";
		
		 if(num > 1000)
		 	sp = false;
		 	
		 sign = (num == (num = Math.abs(num)));
		 num = Math.floor(num*100+0.50000000001);
		 cents = num%100;
		 num = Math.floor(num/100).toString();
		
		 if(cents<10)
			 cents = "0" + cents;
		
		 for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
			 num = num.substring(0,num.length-(4*i+3))+','+num.substring(num.length-(4*i+3));
		
		 if(sp)
		 	retVal = (((sign)?'':'-') + "$ " + num + '.' + cents);
		 else 	
		 	retVal = (((sign)?'':'-') + "$" + num + '.' + cents);
		
		 return retVal;
	}

	function TotalCost(plan, qty)
	{
		var cost = 0;
		var price = 0;
		var arr, tmq;
		if (isNaN(qty))
		{
			alert("Enter a valid quantity");
			return cost;
		}
		else
		{
			for (var i=0; i<priceArr.length; i++)
			{
				arr = priceArr[i];
				if(plan == 0)
					price = arr['monthlyamount'];
				else
					price = arr['yearlyamount'];

				if(priceArr.length == 1)
				{
					cost = qty*price;
					break;
				}	

				if(i==0)   //1st license cost
				{
					cost = 1*price;   
				}
				else if(qty >= arr['qty_min'])
				{
					if(qty > arr['qty_max'])
					{
						if(i == (priceArr.length-1))  //the last
							tmq = qty - arr['qty_min'] + 1; 
						else
							tmq = arr['qty_max'] - arr['qty_min'] + 1; 
					}	
					else
						tmq = qty - arr['qty_min'] + 1; 
											
					cost += tmq*price;   
				}
			}
		}
		
		return cost;
	}
 
	function WriteTotalCost()
	{
		var qty, plan;
		var total = 0;

		qty  = formRef.current.qty.value;
		plan = formRef.current.plan.value;
		total = TotalCost(plan, qty);

		sum = formatCurrency(total);
		document.getElementById("total").innerHTML = sum;
		if(plan == 0)
		{
			document.getElementById("planname").innerHTML = 'month';
			document.getElementById("save").style.display = 'none';
			document.getElementById("save_sum").innerHTML = '0.00';
		}
		else
		{
			total2 = TotalCost(0, qty);
			sum2 = formatCurrency((total2*12)-total);
			document.getElementById("planname").innerHTML = 'year';
			document.getElementById("save").style.display = '';
			document.getElementById("save_sum").innerHTML = sum2;
		}	
	}
	
	function onCalculate()
	{
		if(formRef.current.promcode.value!=prom0)
			formRef.current.submit();
		else
			WriteTotalCost();
	}
	
	function onCurrencyChange()
	{
		formRef.current.submit();
	}
	
	function init()
	{
		WriteTotalCost();
	}

  return (
    <IITLayout>
      <Head>
        <title>Remote Desktop Connection & Control Software | 01com.com</title>
        <meta name="description" content="Remote access software for online meetings, web conferencing software, remote PC access software and remote IT support including help desk software and online training solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IITPageBanner heading="General Support">
        <Text variant={TextVariants.Body1} textColor={TextColors.White}>Contact our knowledgeable staff anytime for immediate assistance. Whether you need technical support while operating one of our programs or have questions regarding pricing or features of our remote access and remote control software, we are available at your convenience.</Text>
        <Box flexDirection="row" flexAlignment="center" margin="24px 0 0 0">
          <Link href='/imintouch-remote-pc-desktop/users-guide/'>
            <PrimaryButton textColor={ButtonTextColors.Blue}>
              User's Guide
            </PrimaryButton>
          </Link>
          <Link href='/imintouch-remote-pc-desktop/faqs/'>
            <SecondaryButton> FAQ</SecondaryButton>
          </Link>
        </Box>
      </IITPageBanner>
      <PageContentContainer>

      <form name="theForm"
    //    action="pricetable.php" method="POST" 
       ref={formRef} onSubmit={handleSubmit}>
<div>
	<div ># of licenses:</div>		  
	<div >
	  <select name="qty" onChange={() => {onCurrencyChange(); return false;}}>
		<option value="1" >1</option>
		<option value="2" >2</option>
		<option value="3" >3</option>
		<option value="4" selected>4</option>
		<option value="5" >5</option>
		<option value="6" >6</option>
		<option value="7" >7</option>
		<option value="8" >8</option>
		<option value="9" >9</option>
		<option value="10" >10</option>
		<option value="11" >11+</option>
	  </select>	
	  <select name="plan" onChange={() => {onCurrencyChange(); return false;}}>
		<option value="1" selected>Annual</option>
		<option value="0" >Monthly</option>
	  </select>	
	  <select name="currency" onChange={() => {onCurrencyChange(); return false;}}>
		<option value="2" selected>US$</option>
		<option value="1" >CN$</option>
	  </select>	
	</div>		  
	<br  />	  
	<div >Promotional code:</div>		  
	<div >
	   <input type="text" name="promcode" value=""  onClick={ () => {if(this.value=='(if any)') this.select();}}>
	</div>	
	<br  />	  
	<div ><a  href="javascript:void(null)" onClick={() => {onCalculate(); return false;}}>
    Calculate &gt;&gt;&gt;&gt;&gt;&gt;</a>&nbsp;<span  id="total">$299.95</span> per <span id="planname">year</span> 
    <span id="save">(save <span id="save_sum">$59.45</span> over monthly plan)</span>
    </div>
	<div >
	  <span >License Fee Table</span>
	  	</div>
    <table cellpadding="0" cellspacing="0">   
	  <tr>
	    <td width="30%" height="22">&nbsp;</td>
	    <td width="26%" align="center" >Monthly Plan</td>
	    <td width="44%" align="center" >Annual Plan</td>
	  </tr>
      	  <tr>
	    <td height="22" align="right"  >1<span >st</span> licenses</td>
	    <td align="center"  >$9.95/mo</td>
	    <td align="center"  >
		  <b>$99.95/yr</b> (17% discount)		</td>
	  </tr>
	          	  <tr>
	    <td height="22" align="right"  >2<span >nd</span> - 5<span >th</span> licenses</td>
	    <td align="center"  >$9.50/mo</td>
	    <td align="center"  >
		  <b>$95.00/yr</b> (17% discount)		</td>
	  </tr>
	          	  <tr>
	    <td height="22" align="right"  >6<span >th</span> - 10<span >th</span> licenses</td>
	    <td align="center"  >$9.00/mo</td>
	    <td align="center"  >
		  <b>$90.00/yr</b> (17% discount)		</td>
	  </tr>
	          	  <tr>
	    <td height="22" align="right" >11<span >th</span> +</td>
	    <td colspan="2" >Please call 1-800-668-2185</td>
	  </tr>
	    	</table>
</div>
<input name="prodid" type="hidden" value="5" />
<input name="mobile" type="hidden" value="0" />
</form>
      </PageContentContainer>
    </IITLayout>
  )
}
