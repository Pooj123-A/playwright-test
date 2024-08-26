
import { test, expect } from "@playwright/experimental-ct-react";
import App910 from "../example/App910.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App910 />);
  await expect(component).toContainText("Learn React");
});
