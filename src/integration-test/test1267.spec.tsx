
import { test, expect } from "@playwright/experimental-ct-react";
import App1267 from "../example/App1267.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1267 />);
  await expect(component).toContainText("Learn React");
});
