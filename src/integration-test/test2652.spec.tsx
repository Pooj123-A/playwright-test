
import { test, expect } from "@playwright/experimental-ct-react";
import App2652 from "../example/App2652.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2652 />);
  await expect(component).toContainText("Learn React");
});
