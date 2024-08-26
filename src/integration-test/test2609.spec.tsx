
import { test, expect } from "@playwright/experimental-ct-react";
import App2609 from "../example/App2609.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2609 />);
  await expect(component).toContainText("Learn React");
});
