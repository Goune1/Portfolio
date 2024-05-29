import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function Card3() {
  return (
    <Card className="max-w-[400px] bg-slate-800">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={30}
          radius="sm"
          src="logo portfolio.png"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md text-white">Portfolio</p>
          <p className="text-small text-default-500">portfolio.gounevps.com</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p className="text-white">Découvrez les talents du Goat</p>
        <img src="app_screenshot3.png" alt="app screenshot" className="pt-8" />
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/Goune1/wineservice"
        >
          Voir le code source sur GitHub
        </Link>
      </CardFooter>
    </Card>
  );
}
