
import { test, expect } from "@playwright/experimental-ct-react";
import App681 from "../example/App681.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App681 />);
  await expect(component).toContainText("Learn React");
});
