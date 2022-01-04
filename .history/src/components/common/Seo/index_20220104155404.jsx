import React from "react";
import Helmet from "react-helmet";
import Thumbnail from "assets/thumbnail/thumbnail.png";
import Logo from "assets/illustrations/gpo-logo-bir.svg";
import {
	url,
	defaultDescription,
	social,
	defaultTitle,
	socialLinks,
	address,
	contact,
	legalName,
	foundingDate,
	key
} from "data/config";

const Seo = ({
	title = defaultTitle,
	description = defaultDescription,
	location = "",
}) => {
	const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${legalName}",
		"url": "${url}",
		"logo": "${Logo}",
		"foundingDate": "${foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${contact.email}",
			"telephone": "${contact.phone}",
			"contactType": "customer service"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "${address.city}",
			"addressRegion": "${address.region}",
			"addressCountry": "${address.country}",
			"postalCode": "${address.zipCode}"
		},
		"sameAs": [
			"${socialLinks.facebook}",
			"${socialLinks.google}",
			"${socialLinks.instagram}"
		]
  	}`;

	return (
		<Helmet>
			<meta name="description" content={description} />
			<meta name="image" content={Thumbnail} />

			<meta property="og:url" content={`${url}${location}`} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={Thumbnail} />
			<meta property="fb:app_id" content={social.facebook} />

			<meta name="facebook:card" content="summary" />
			<meta name="facebook:creator" content={socialLinks.facebook} />
			<meta name="facebook:site" content={social.facebook} />
			<meta name="facebook:title" content={title} />
			<meta name="facebook:description" content={description} />
			<meta name="facebook:image:src" content={Thumbnail} />
			<meta name="instagram:card" content="summary" />
			<meta name="instagram:creator" content={socialLinks.instagram} />
			<meta name="instagram:site" content={social.instagram} />
			<meta name="instagram:title" content={title} />
			<meta name="instagram:description" content={description} />
			<meta name="instagram:image:src" content={Thumbnail} />
			<script type="application/ld+json">{structuredDataOrganization}</script>
			<link rel="publisher" href={socialLinks.google} />
			<title>{title}</title>
			<html lang="en" dir="ltr" />
		</Helmet>
	);
};

export default Seo