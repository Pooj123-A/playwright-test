
import { test, expect } from "@playwright/experimental-ct-react";
import App333 from "../example/App333.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App333 />);
  await expect(component).toContainText("Learn React");
});
