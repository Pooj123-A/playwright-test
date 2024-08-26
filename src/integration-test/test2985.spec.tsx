
import { test, expect } from "@playwright/experimental-ct-react";
import App2985 from "../example/App2985.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2985 />);
  await expect(component).toContainText("Learn React");
});
