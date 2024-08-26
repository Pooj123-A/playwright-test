
import { test, expect } from "@playwright/experimental-ct-react";
import App313 from "../example/App313.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App313 />);
  await expect(component).toContainText("Learn React");
});
