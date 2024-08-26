
import { test, expect } from "@playwright/experimental-ct-react";
import App953 from "../example/App953.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App953 />);
  await expect(component).toContainText("Learn React");
});
