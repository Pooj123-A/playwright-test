
import { test, expect } from "@playwright/experimental-ct-react";
import App2760 from "../example/App2760.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2760 />);
  await expect(component).toContainText("Learn React");
});
