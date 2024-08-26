
import { test, expect } from "@playwright/experimental-ct-react";
import App2094 from "../example/App2094.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2094 />);
  await expect(component).toContainText("Learn React");
});
