
import { test, expect } from "@playwright/experimental-ct-react";
import App2891 from "../example/App2891.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2891 />);
  await expect(component).toContainText("Learn React");
});
