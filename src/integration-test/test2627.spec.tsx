
import { test, expect } from "@playwright/experimental-ct-react";
import App2627 from "../example/App2627.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2627 />);
  await expect(component).toContainText("Learn React");
});
