
import { test, expect } from "@playwright/experimental-ct-react";
import App2991 from "../example/App2991.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2991 />);
  await expect(component).toContainText("Learn React");
});
