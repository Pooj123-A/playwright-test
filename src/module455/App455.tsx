
import { test, expect } from "@playwright/experimental-ct-react";
import App455 from "./App455.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App455 />);
  await expect(component).toContainText("Learn React");
});
