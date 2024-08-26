
import { test, expect } from "@playwright/experimental-ct-react";
import App2504 from "../example/App2504.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2504 />);
  await expect(component).toContainText("Learn React");
});
