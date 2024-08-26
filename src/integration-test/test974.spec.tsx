
import { test, expect } from "@playwright/experimental-ct-react";
import App974 from "../example/App974.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App974 />);
  await expect(component).toContainText("Learn React");
});
