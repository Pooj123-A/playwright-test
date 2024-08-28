
import { test, expect } from "@playwright/experimental-ct-react";
import App766 from "./App766.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App766 />);
  await expect(component).toContainText("Learn React");
});
