
import { test, expect } from "@playwright/experimental-ct-react";
import App2859 from "../example/App2859.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2859 />);
  await expect(component).toContainText("Learn React");
});
