
import { test, expect } from "@playwright/experimental-ct-react";
import App2059 from "../example/App2059.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2059 />);
  await expect(component).toContainText("Learn React");
});
