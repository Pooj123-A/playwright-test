
import { test, expect } from "@playwright/experimental-ct-react";
import App2010 from "../example/App2010.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2010 />);
  await expect(component).toContainText("Learn React");
});
