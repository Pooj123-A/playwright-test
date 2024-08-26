
import { test, expect } from "@playwright/experimental-ct-react";
import App1443 from "../example/App1443.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1443 />);
  await expect(component).toContainText("Learn React");
});
