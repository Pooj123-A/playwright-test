
import { test, expect } from "@playwright/experimental-ct-react";
import App2915 from "../example/App2915.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2915 />);
  await expect(component).toContainText("Learn React");
});
