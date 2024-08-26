
import { test, expect } from "@playwright/experimental-ct-react";
import App288 from "../example/App288.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App288 />);
  await expect(component).toContainText("Learn React");
});
