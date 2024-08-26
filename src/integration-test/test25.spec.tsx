
import { test, expect } from "@playwright/experimental-ct-react";
import App25 from "../example/App25.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App25 />);
  await expect(component).toContainText("Learn React");
});
