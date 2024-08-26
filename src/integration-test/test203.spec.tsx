
import { test, expect } from "@playwright/experimental-ct-react";
import App203 from "../example/App203.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App203 />);
  await expect(component).toContainText("Learn React");
});
