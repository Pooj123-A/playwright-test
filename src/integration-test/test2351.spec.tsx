
import { test, expect } from "@playwright/experimental-ct-react";
import App2351 from "../example/App2351.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2351 />);
  await expect(component).toContainText("Learn React");
});
