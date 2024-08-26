
import { test, expect } from "@playwright/experimental-ct-react";
import App723 from "../example/App723.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App723 />);
  await expect(component).toContainText("Learn React");
});
