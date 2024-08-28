
import { test, expect } from "@playwright/experimental-ct-react";
import App993 from "./App993.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App993 />);
  await expect(component).toContainText("Learn React");
});
