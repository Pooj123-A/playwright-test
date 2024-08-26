
import { test, expect } from "@playwright/experimental-ct-react";
import App481 from "../example/App481.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App481 />);
  await expect(component).toContainText("Learn React");
});
