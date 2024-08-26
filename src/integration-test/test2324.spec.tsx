
import { test, expect } from "@playwright/experimental-ct-react";
import App2324 from "../example/App2324.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2324 />);
  await expect(component).toContainText("Learn React");
});
