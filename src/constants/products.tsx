import singleDrivewayImage from "public/images/singleDriveway.webp";
import doubleDriveway from "public/images/doubleDriveway.webp";
import tripleDriveway from "public/images/tripleDriveway.webp";
import sharedDriveway from "public/images/sharedDriveway.webp";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

export const products = [{
  href: "services/single-driveway",
  title: "Single Driveway Snow Removal",
  description: "Reliable snow removal services for single driveways, ensuring your property remains safe and accessible all winter long.",
  thumbnail: singleDrivewayImage,
  images: [singleDrivewayImage, singleDrivewayImage],
  stack: ["Professional Snow Blowing", "Timely Service", "Affordable Pricing"],
  slug: "single-driveway",
  price: {
      earlyBird: "$399",
      regular: "$449"
  },
  content: (
    <div>
      <p>
        Our single driveway snow removal service starts after a snowfall of 5 cm or more, with follow-up visits after city plows pass. We ensure a timely response, so you can have peace of mind that your driveway will remain clear and safe during the winter months.
      </p>
      <p>
        Early bird pricing starts at $399 with regular rates at $449. Discounts are available for joint sign-ups with neighbors, referrals, and more. This service does not include salting, de-icing, or hand shoveling unless specifically requested.
      </p>
    </div>
  )
},
{
  href: "services/double-driveway",
  title: "Double Driveway Snow Removal",
  description: "Expert snow removal for double driveways, keeping your home and driveway accessible even during heavy snowfalls.",
  thumbnail: doubleDriveway,
  images: [doubleDriveway, doubleDriveway],
  stack: ["Seasonal Rates", "Experienced Crew", "Follow-Up Service"],
  slug: "double-driveway",
  price: {
      earlyBird: "$449",
      regular: "$499"
  },
  content: (
    <div>
      <p>
        Our double driveway service is designed to ensure you don't have to worry about heavy snowfall blocking your access. We start snow removal after 5 cm of snow has accumulated and return after city plows pass.
      </p>
      <p>
        Early bird pricing starts at $449, with regular rates at $499. Additional discounts for neighbor sign-ups and referrals apply. This service covers your entire driveway but does not include additional services like salting or de-icing unless requested.
      </p>
    </div>
  )
},
{
  href: "services/triple-driveway",
  title: "Triple Driveway Snow Removal",
  description: "Comprehensive snow removal for larger triple driveways, with a focus on thorough and timely service.",
  thumbnail: tripleDriveway,
  images: [tripleDriveway, tripleDriveway],
  stack: ["Custom Service", "Full Coverage", "Discounts Available"],
  slug: "triple-driveway",
  price: {
      earlyBird: "$499",
      regular: "$549"
  },
  content: (
    <div>
      <p>
        Our triple driveway snow removal ensures that your larger driveway stays clear throughout the winter. We initiate service after 5 cm of snowfall and provide follow-up visits after city plows clear the streets.
      </p>
      <p>
        Early bird pricing starts at $499, with regular rates at $549. A variety of discounts, such as those for street sign-ups and referrals, are available. Add-on services like salting and de-icing can be requested for an additional fee.
      </p>
    </div>
  )
},
{
  href: "services/shared-driveway",
  title: "Shared Driveway Snow Removal",
  description: "Affordable snow removal service for shared driveways, ensuring both neighbors get access to clear paths throughout winter.",
  thumbnail: sharedDriveway,
  images: [sharedDriveway, sharedDriveway],
  stack: ["Joint Sign-Up Discounts", "Reliable Service", "Affordable Pricing"],
  slug: "shared-driveway",
  price: {
      earlyBird: "$325",
      regular: "$360"
  },
  content: (
    <div>
      <p>
        Our shared driveway snow removal service is perfect for neighbors who want to share the cost of snow removal. The service covers both sides of the driveway after 5 cm or more of snow, with follow-up visits after city plows pass.
      </p>
      <p>
        Early bird pricing starts at $325, with regular rates at $360. We also offer a $25 discount if both neighbors sign up together. This service does not include salting, de-icing, or hand shoveling unless specifically requested.
      </p>
    </div>
  )
}
];
