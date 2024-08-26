
import { test, expect } from "@playwright/experimental-ct-react";
import App430 from "../example/App430.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App430 />);
  await expect(component).toContainText("Learn React");
});
