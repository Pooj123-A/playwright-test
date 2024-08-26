
import { test, expect } from "@playwright/experimental-ct-react";
import App2529 from "../example/App2529.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2529 />);
  await expect(component).toContainText("Learn React");
});
