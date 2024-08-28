
import { test, expect } from "@playwright/experimental-ct-react";
import App173 from "./App173.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App173 />);
  await expect(component).toContainText("Learn React");
});
