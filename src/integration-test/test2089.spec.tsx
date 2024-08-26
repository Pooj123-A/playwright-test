
import { test, expect } from "@playwright/experimental-ct-react";
import App2089 from "../example/App2089.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2089 />);
  await expect(component).toContainText("Learn React");
});
