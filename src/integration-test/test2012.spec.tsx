
import { test, expect } from "@playwright/experimental-ct-react";
import App2012 from "../example/App2012.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2012 />);
  await expect(component).toContainText("Learn React");
});
