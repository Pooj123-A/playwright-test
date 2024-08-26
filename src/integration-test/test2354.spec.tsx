
import { test, expect } from "@playwright/experimental-ct-react";
import App2354 from "../example/App2354.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2354 />);
  await expect(component).toContainText("Learn React");
});
