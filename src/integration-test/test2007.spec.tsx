
import { test, expect } from "@playwright/experimental-ct-react";
import App2007 from "../example/App2007.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2007 />);
  await expect(component).toContainText("Learn React");
});