
import { test, expect } from "@playwright/experimental-ct-react";
import App1218 from "../example/App1218.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1218 />);
  await expect(component).toContainText("Learn React");
});
