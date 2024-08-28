
import { test, expect } from "@playwright/experimental-ct-react";
import App230 from "./App230.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App230 />);
  await expect(component).toContainText("Learn React");
});
