
import { test, expect } from "@playwright/experimental-ct-react";
import App351 from "../example/App351.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App351 />);
  await expect(component).toContainText("Learn React");
});
