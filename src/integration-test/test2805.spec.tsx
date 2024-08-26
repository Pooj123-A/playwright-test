
import { test, expect } from "@playwright/experimental-ct-react";
import App2805 from "../example/App2805.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2805 />);
  await expect(component).toContainText("Learn React");
});
