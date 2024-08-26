
import { test, expect } from "@playwright/experimental-ct-react";
import App541 from "../example/App541.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App541 />);
  await expect(component).toContainText("Learn React");
});
