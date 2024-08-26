
import { test, expect } from "@playwright/experimental-ct-react";
import App2360 from "../example/App2360.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2360 />);
  await expect(component).toContainText("Learn React");
});
