
import { test, expect } from "@playwright/experimental-ct-react";
import App965 from "../example/App965.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App965 />);
  await expect(component).toContainText("Learn React");
});
