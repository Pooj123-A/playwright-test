
import { test, expect } from "@playwright/experimental-ct-react";
import App764 from "./App764.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App764 />);
  await expect(component).toContainText("Learn React");
});
