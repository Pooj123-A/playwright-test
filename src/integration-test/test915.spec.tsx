
import { test, expect } from "@playwright/experimental-ct-react";
import App915 from "../example/App915.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App915 />);
  await expect(component).toContainText("Learn React");
});
