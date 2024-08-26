
import { test, expect } from "@playwright/experimental-ct-react";
import App754 from "../example/App754.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App754 />);
  await expect(component).toContainText("Learn React");
});
