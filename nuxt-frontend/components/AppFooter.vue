<template>
	<footer class="con flex flex-col">
		<div class="flex justify-between text-[#808080] mb-8">
			<div class="flex flex-col">
				<span class="font-semibold mb-3">Services</span>
				<ul class="text-sm">
					<li class="mb-2">
						<a href="https://getexperience.com/experiences?realm=person&googlePlaceId=ChIJybDUc_xKtUYRTM9XV8zWRD0">In person</a>
					</li>
					<li class="mb-2">
						<a href="https://getexperience.com/experiences?realm=online">Online</a>
					</li>
					<li class="mb-2">
						<a href="https://getexperience.com/experiences?realm=meta">Metaverse</a>
					</li>
					<li class="mb-2">
						<a href="https://getexperience.com/experiences?realm=games">Gaming</a>
					</li>
					<li class="mb-2">
						<a href="https://getrentacar.com/?utm_campaign=website&utm_source=getexp&utm_medium=partner">Car rental</a>
					</li>
					<li class="mb-2">
						<a href="https://gettransfer.com/transfers/new?utm_campaign=website&utm_source=getexp&utm_medium=partner">Book a transfer</a>
					</li>
					<li>
						<a href="https://getexperience.com/requests/new">Request for experience</a>
					</li>
				</ul>
			</div>
			<div class="flex flex-col">
				<span class="font-semibold mb-3">Site map</span>
				<ul class="text-sm">
					<li class="mb-2">
						<a href="https://getexperience.com/">Add an experience</a>
					</li>
					<li class="mb-2">
						<a href="https://getexperience.com/privacy-policy">Privacy Policy</a>
					</li>
					<li class="mb-2">
						<a href="https://getexperience.com/terms-of-use">License Agreement</a>
					</li>
				</ul>
			</div>
			<div class="flex flex-col">
				<span class="font-semibold">Contacts</span>
				<table class="border-separate border-spacing-y-3 table-auto max-w-[396px] text-sm">
					<tr>
						<td width="132">USA:</td>
						<td>
							<a href="tel:+13025979133">+13025979133</a>
						</td>
					</tr>
					<tr>
						<td>UK:</td>
						<td>
							<a href="tel:+441361310189">+441361310189</a>
						</td>
					</tr>
					<tr>
						<td>Email:</td>
						<td>
							<a href="mailto:info@getexperience.com">info@getexperience.com</a>
						</td>
					</tr>
					<tr>
						<td valign="top">Address:</td>
						<td>
							<address>
								251 Little Falls Drive, Wilmington, DE 19808, New Castle County, USA
							</address>
						</td>
					</tr>
				</table>
			</div>
		</div>
		<div class="flex items-center justify-between border-t border-solid border-[#ccc] py-8">
			<div class="w-[400px]">
				<span class="text-[12px] leading-[15px] text-[#808080]">
					&copy;GetExperience Inc. GetExperience™ is the trademark of<br>
					GetExperience Inc. All right reserved.
				</span>
			</div>
			<div class="flex gap-5">
				<a href="https://www.facebook.com/GetExperiencecom-114116281265273" target="_blank">
					<img src="@/assets/images/icon-fb.png" alt="Facebook" width="24" height="24">
				</a>
				<a href="https://instagram.com/get_experience?igshid=YmMyMTA2M2Y=" target="_blank">
					<img src="@/assets/images/icon-ig.png" alt="Instagram" width="24" height="24">
				</a>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
		name: 'AppFooter',
	};
</script>